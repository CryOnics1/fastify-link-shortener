# Fastify AWS link shortener
Just for fun 🙃

## 📖 Introduction

It's a simple example of working lambda with fastify, dynamoDB and serverless

- Lambda functions written in [Node.js 12](https://aws.amazon.com/ru/about-aws/whats-new/2019/11/aws-lambda-supports-node-js-12/)
- [Serverless](https://github.com/serverless/serverless)
- [Fastify](https://github.com/fastify/fastify)
- [Aws-lambda-fastify](https://github.com/fastify/aws-lambda-fastify)
- DynamoDB

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
