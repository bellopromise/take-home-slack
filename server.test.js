require('dotenv').config()

const express = require('express')
const request = require('supertest')
const slackRoute = require('./router')

const URL = '/notify'
const app = express()

app.use(express.json())
app.use('/', slackRoute)

describe(`POST ${URL}`, () => {
  it('should send a Slack alert for spam notifications', async () => {
    const payload = {
      RecordType: 'Bounce',
      Type: 'SpamNotification',
      TypeCode: 512,
      Name: 'Spam notification',
      Tag: '',
      MessageStream: 'outbound',
      Description: 'The message was delivered, but was either blocked by the user, or',
      Email: 'aurthur@example.com',
      From: 'notifications@honeybadger.io',
      BouncedAt: '2023-02-27T21:41:30Z'
    }

    const response = await request(app)
      .post(`${URL}`)
      .send(payload)

    expect(response.status).toEqual(200)
  })

  it('should not send a Slack alert for non-spam notifications', async () => {
    const payload = {
      RecordType: 'Bounce',
      MessageStream: 'outbound',
      Type: 'HardBounce',
      TypeCode: 1,
      Name: 'Hard Bounce',
      Tag: 'Test',
      Description: 'The server was unavailable to delivere your message',
      Email: 'aurthur@example.com',
      From: 'notifications@honeybadger.io',
      BouncedAt: '2023-02-27T21:41:30Z'
    }

    const response = await request(app)
      .post(`${URL}`)
      .send(payload)
    
      expect(response.status).toEqual(409)
  })
})
