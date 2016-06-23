# Introduction to AngularJS

### 1. 前端JS框架概览

#### 1.1 引子
当web应用变得越来越复杂，人工手动地去操作DOM和更新数据十分复杂且非常tedious。所以就需要使用JS框架，这些框架通常都具有定义良好的结构，并且是基于Model View Controller/Model View View Model等。

#### 1.2 Library vs Framework
- Library是一组功能的集合，你通过代码调用Library中的来实现某些功能，例如JQuery。
- 框架是一个应用程序的特殊实现，你写的代码只是用来填充细节，框架本身决定何时调用你的代码来做某个具体的动作。例如Angular，ember。

#### 1.3 框架特点
- Hollywood Principle
  - Don‘t call us, we'll call you!
- Inversion of Control(控制反转)
- [Imperative](https://en.wikipedia.org/wiki/Imperative_programming) vs [Declarative Programming](https://en.wikipedia.org/wiki/Declarative_programming)
使用Declarative Programming时，你只需要关心要实现什么，而不需要关心如何实现。

#### 1.4 JS 框架
- Angular
- Ember
- Backbone
- React
- Aurelia
- Meteor
- Polymer
- Knockout
- Vue
- Mercury

前三个目前是占据主导地位的JS框架（2016）。

### 2. Introduction to AngularJS
#### 2.1 AngularJS 历史
- Designed by Misko Hevery
- First released in june 2012
- 最流行的JS前端框架之一

#### 2.2 啥是Angular
- 为动态web应用提供服务的结构化的框架
  - HTML只能展示静态页面
  - Angular给HTML增添了动态特性，它具有如下特点
    - 解决了与后端数据交互产生的impedance mismatch的问题
    - Designed with CRUD(create, read, update and delete) applications, 数据驱动，根据数据的改变不断的更新页面。
    - Declarative approach

#### 2.3 使用Angular JS
```html
<script src="../bower_components/angular/angular.min.js"></script>
```

#### 2.4 Angular 内置指令
- HTML定制属性
  - data-* 属性（Bootstrap/jQuery）
  - Angualr： ng-* 属性 / data-ng-*
- 例如: ng-app, ng-init, ng-bind, ng-model, ng-repeat。

#### 2.5 ngApp指令
- ngApp (ng-app)应用于application的根部
  - 如果应用于html则表示整个页面都处于Angular application的控制之下。

#### 2.6 ngInit指令
- ngInit (ng-init)指令用来：
  - Evaluate an expression
  - 初始化JS变量

#### 2.7 Angular Expressions
- 和简单的Javascript Expressions差不多，主要有以下特性
  - Evaluated against Angualr __scope__ object
  - 没有条件，循环和异常处理
  - Expressions enclosed in {{expression}}
- 例子：
```html
<p>6+5={{6+5}}</p>

<div>
    <h2>{{dish.name}}</h2>
    <p>{{dish.description}}</p>
</div>
```

#### 2.8 ngModel指令
- ngModel (ng-model)指令用于将输入数据绑定到一个scope中的变量。
  - Two-way data binding
```html
<p>{{dish.description}}</p>
<p>Comment: {{dish.comment}}</p>
<p>Type your comment:
  <input type="text" ng-model="dish.comment"></p>
```

#### 2.9 Two-way Data Binding
- 将一个HTML或CSS属性绑定到一个Javascript变量
  - 当变量的值更新了，响应的HTML/CSS属性也一样被更新。

#### 2.10 ngRepeat指令
- ngRepeat (ng-repeat)指令是一个循环结构：
  - 循环遍历一个集合中的item
  - 为每个item实例化一个template
