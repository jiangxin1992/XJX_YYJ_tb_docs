使用docker运行此文档
=========


```bash
docker build -t yej .
docker run --name yej -p 54321:80 -d yej

# open http://localhost:54321
```

或者(推荐此方法)

```
docker-compose up
```