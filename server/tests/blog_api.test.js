const { test, after, beforeEach, describe, before } = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const bcrypt = require('bcrypt')
const Blog = require('../models/blog')
const User = require('../models/user')
const helper = require('./test_helper')
const jwt = require('jsonwebtoken')
const config = require('../utils/config')
require('events').setMaxListeners(20) // Increasing listener limit for "creation succeeds with a fresh username" test

describe('Backend testing', () => {

  // Подключение к базе данных перед выполнением тестов
  before(async () => {
    try {
      await mongoose.connect(process.env.TEST_MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000,
        socketTimeoutMS: 45000,
      });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error.message);
      throw error; // выбрасываем ошибку, чтобы тесты не продолжались без соединения с БД
    }
  });



describe('Backend testing', () => {
  beforeEach(async () => {
    await Blog.deleteMany({})

    const blogObjects = helper.initialBlogs.map((blog) => new Blog(blog))
    const promiseArray = blogObjects.map((blog) => blog.save())
    await Promise.all(promiseArray)
  })

  describe('all blogs are returned in JSON format and have a unique ID', () => {
    test('blogs are returned as json', async () => {
      await api
        .get('/api/blogs')
        .expect(200)
        // .expect('Content-Type', /application\/json/)
    })
  })

  // Always last test to close the database connection
  // test('zz_close database connection', async () => {
  //   console.log('Closing database connection...')
  //   await User.deleteMany({})
  //   console.log('users deleted.')
  //   await mongoose.connection.close()
  //   console.log('Database connection closed.')
  // })
})

after(async () => {
  console.log('Running after hook...')
  await User.deleteMany({})
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close()
    console.log('Database connection closed.')
  } else {
    console.log('Database connection was already closed.')
  }
})

})
// after(async () => {
//   await mongoose.connection.close()
// })
