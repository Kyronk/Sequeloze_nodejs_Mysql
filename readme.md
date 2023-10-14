#
về thằng sequelize.
thằng sequelize này gồm 2 phần là sequelize và sequelize cli:
- dùng thằng sequelize để config db.
- thằng cli tự sinh ra thằng models và migrations.
 + cấu trúc nó giống laravel : thằng ORM nào cũng v
  - cách dùng : https://sequelize.org/docs/v6/other-topics/migrations/
   + lưu ý khi sử dụng thằng cli 
    - nếu source code viết trong thư mục src thì cần di chuyển vào bên trong scr để khởi tạo cli sequelize.
    - nếu đứng bên ngoài thư mục src mà tạo thì models và migrations sẻ dược khởi tạo bên ngoài luôn.
    - nếu khởi tạo thư mục src mọi câu lệnh tạo. 
    npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
    đều phải đứng ở trong src mới khởi tạo đc.
    - sau khi tạo và code xong file models và migration thì dùng câu lệnh    //   npx sequelize db:migrate  //    để khởi tạo
    các bảng này vào database (lưu ý data base đã được khởi tạo rồi : create database name_database).
    - trường hợp nếu tạo bảng bị nhầm thiếu trường hãy xoá bảng đó trong db và xoá dòng của bảng đó được khởi tạo
    trong bảng sequelize ( lúc nào cũng sẽ sinh ra thêm 1 bảng sequelize để quản lý tất cả các bảng) rồi sau đó 
    chạy lại dòng lệnh npx khởi tạo mirgate là ok.

#=============TIPS== sequelize
Trong model không cần khai báo khoá chính đó là lý do tại sao mà k có mô tả id trong các bảng model 
nhưng lại có mô tả id trong migrate :,)


#============================
về thằng babel
    lệnh npm i -D @babel/core @babel/preset-env @babel/node
    - trong file package.json sửa lại câu start  "start": "nodemon --exec babel-node server.js"
    - tạo file .babelrc 
    {
        "presets": [
            "@babel/preset-env"
        ]
    }

#=============================
về ES5 và ES6
+ ES5  
    - nều không có "type": "module" thì không sử dụng được câu lệnh import - chỉ sử dụng được câu lệnh require.
    - ngoài ra nó còn không sài được async await và nhiêu cái mới thuộc es6

    => với các vấn đề này thì điều kiện cương quyết ban đầu là nên config babel trước để sài được linh hoạt cả 
    2 kiểu viết.

+ ES6 - sử dụng được câu lệnh import nhưng không sử dụng được câu lệnh require
    trong file package.json 
    {
        "name": "nodejs_myseql_sequelize_1",
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "type": "module", // trong file package mà có có thì nó nhận được cú pháp ES6
        "scripts": {
            "start": "nodemon server.js",
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "keywords": [],
        "author": "",
        "license": "ISC",
        "dependencies": {
            "cors": "^2.8.5",
            "dotenv": "^16.0.3",
            "express": "^4.18.2",
            "mysql2": "^3.2.3",
            "nodemon": "^2.0.22",
            "sequelize": "^6.31.0"
        },
        "devDependencies": {
            "@babel/core": "^7.21.4",
            "@babel/node": "^7.20.7",
            "@babel/preset-env": "^7.21.4",
            "sequelize-cli": "^6.6.0"
        }
    }

=======================
close port : npx kill-port 4200

GUI: https://stackoverflow.com/questions/39091735/port-4200-is-already-in-use-when-running-the-ng-serve-command#:~:text=ctrl%20%2B%20c%20%2F%2F%20for%20kill,related%20for%20running%20the%20app.