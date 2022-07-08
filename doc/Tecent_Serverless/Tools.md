### CLI

```shell
sudo npm i -g @cloudbase/cli  
```

```shell
tcb -v
```

创建新应用

```shell
tcb new
```

Node cloud function

```shell
## 跟目录下 部署
tcb 

## 创建http触发器
## 会列出当前环境下的所有云函数 会要求输入访问路径
tcb service create


```

### SCF

SCF-CLI 为本地测试工具

```shell
## 请输入入口文件地址(相对路径）
## 请输入入口执行方法名称: main 
## 请选择测试模版 http
scf init 
```

