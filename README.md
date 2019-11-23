# Fastify AWS link shortener
Shorten, create and share links with your friends.

Just for fun 🙃

Demo-server: https://aws-tests.ml/l/

Demo-shorted-url: https://aws-tests.ml/l/CzFd5

You can specify the hash length in the config file.

ATTENTION! Your links on the demo server will live about ± 5 minutes (TTL)

## 📖 Introduction

It's a simple example of working lambda with fastify, dynamoDB and serverless

- Lambda functions written in [Node.js 12](https://aws.amazon.com/ru/about-aws/whats-new/2019/11/aws-lambda-supports-node-js-12/)
- [Serverless](https://github.com/serverless/serverless)
- [Fastify](https://github.com/fastify/fastify)
- [Aws-lambda-fastify](https://github.com/fastify/aws-lambda-fastify)
- DynamoDB
- [Nanoid](https://github.com/ai/nanoid)

## 👨🏻‍💻 <a name="quick-start"></a>Quick Start
1. **Set-up your provider credentials.** [Watch the video on setting up credentials](https://www.youtube.com/watch?v=HSd9uYj2LJA)

2. **Install dependencies via npm:**
```bash
npm install
```

3. **Go to `src/config/index.js` and add your a domain**

4. **Deploy the service:**
```bash
npm run sls deploy --stage dev
```
or 
```bash
npm run sls deploy --stage dev --aws-profile yourProfile
```

## 🌈 <a name="api"></a>API

1. [GET] https://your-url.com/:id
2. [POST] https://your-url.com with body: 
```json
{
  "url": "https://github.com/CryOnics1"
}
```
