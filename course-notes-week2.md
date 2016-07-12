# Task runners, angular scope, form & form validation

### 为什么要使用Task Runners
- Web 开发包含了很多重复性的工作
- DRY(do not repeat yourself) 原则

### CSS Tasks
- Compiling Sass or Less into CSS
- [Autoprefixer](http://www.w3cplus.com/css3/autoprefixer-css-vender-prefixes.html)
- Minification
- Concatenation

### Javascript Tasks
- JSHint
- Concatenation
- Uglification
- Rechecking

### Other Tasks
- Images: optimizing files to reduce file size
- Watch: watching for changes in files and automatically rerunning tasks
- Server and Livereload
- Testing
- Building your site for deployment

### Joke
At the end of this section, you will be grunting like crazy:D

### Grunt
- Task runner based on __configuration__ of tasks.
- Installing grunt globally: `npm install -g grunt-cli`
- Installing grunt locally: `npm install grunt --save-dev`

### 配置Grunt
- 在Gruntfile.js中配置：
```
module.exports = function (grunt) {
    // do requires here
    require('jit-grunt')(grunt);

    // do grunt task configurations here
    grunt.initConfig({

    });
    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('default', ['build']);
}
```

### 文件通配模式（File Globing patterns）
- * 匹配任意数量的字符集，除了/
- ? 匹配单一字符，除了/
- ** 匹配任意数量的字符集，包括/, as long as it's the only thing in a path part
- {}
- !

### Gruntfile
Grunt使用的难点在于配置Gruntfile.js，这需要在以后不断的练习中熟悉。

### Gulp
Gulp是基于代码的task runner。

### Scope
原理和javascript中的scope类似。

### form validation
由于HTML5自带form validation，所以在使用angular的时候我们希望使用angular的form validation来取代HTML5自带的form validation。