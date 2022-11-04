# ZJU Auto Health Report 0.0.2

## 浙江大学自动健康打卡 0.0.2

---

## Installation

* 点击右上方绿色`Code`>`Download ZIP`
* git玩家可`git clone https://github.com/Cosmo808/zju-healthreport.git`

## Preparations

1. 用`记事本`打开目录下的`injected/zjuam.js`文件，修改第1行和第2行的内容，在指定区域输入你的浙大统一认证账号密码（__注意！ 账号密码两侧的双引号要保留__），例如`$("#username").val("3190101234");\ $("#password").val("wuzhaohuishiwodie");\`，可以帮助你自动登录浙江大学统一认证；其次修改`injected/health_report.js`第4行和第5行，完善打卡信息。
2. 把整个文件夹放在一个你想存放的位置，没必要就不要移动文件，如果移动了文件位置需要在浏览器上重新添加插件。
3. 该脚本是Chrome浏览器插件，必须在含有Chrome内核的浏览器上安装使用。
4. 在Chrome浏览器中打开`chrome://extensions/`网页，在右上角启动开发者模式，通过左上角加载已解压的扩展程序选择`zju-healthreport`文件夹，插件就添加成功了。

## Usage

* 该插件在打开Chrome浏览器的时候触发，如果你还未进行浙江大学统一认证，则会自动帮你通过认证并进入打卡界面自动打卡；若已经登陆过浙江大学统一认证则会直接进入打卡界面打卡。
* 触发条件是打开Chrome浏览器，所以确保已经关闭所有浏览器再打开即可自动打卡。
* 插件会自动帮你关闭打卡界面，不许需要手动关闭。
* 若你想移除插件，可以在`chrome://extensions/`网页中操作，也可以点击浏览器右上角的拼图小标志来设置。

## BUG Repair

1. 2021-8-6 
2. 2021-8-7 
3. 2022-1-4 
