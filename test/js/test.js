

sucker.config({
	base:'',
	paths:{
		id:'js/id',
		amd : 'js/amd',
		simple : 'js/simple',
		cmd : 'js/cmd'
	},
	alias:{
		'id':'id/id',
		'AMD':'amd/amd',
		'DATA-object':'simple/object',
		'DATA-array':'simple/array',
		'DATA-number':'simple/number',
		'DATA-string':'simple/string',
		'CMD-return':'cmd/return',
		'CMD-exports':'cmd/exports',
		'CMD-require':'cmd/require',
		'CMD-module-exports':'cmd/module-exports'
	},
	charset:'utf-8',
	cache: false,
	debug : true
});

QUnit.module('SET ID');
QUnit.config.openAll = true
QUnit.test( "SET ID - 定义模块标识", function(assert) {
    assert.expect(1);
    var done1 = assert.async();
    sucker.use('id', function (exp) {
        assert.ok(exp === 'id ok', 'id/id.js = > define("id",function(){return "'+exp+'"})');
        done1();
    });
});

QUnit.module('AMD');
QUnit.test( "AMD 加载模式", function(assert) {
    assert.expect(1);
    var done1 = assert.async();
    sucker.use('AMD', function (exp) {
        assert.ok(exp === 'dataAdataB', 'amd/amd.js = > define(["js/data/a","js/data/b"],function(a,b){return a+b}) // =>dataAdataB');
        done1();
    });
});

QUnit.module('CMD');
QUnit.test( "CMD 加载模式", function(assert) {
    assert.expect(4);
    var done1 = assert.async();
    var done2 = assert.async();
	var done3 = assert.async();
    var done4 = assert.async();

    sucker.use('CMD-return', function (exp) {
        assert.ok(exp === 'cmd-return', 'cmd/return.js  = > define(function(require, exports, module){ return "return..." })');
        done1();
    });
    sucker.use('CMD-exports', function (exp) {
        assert.ok(exp.a === 'cmd-exports', 'cmd/exports.js  = > define(function(require, exports, module){ exports.a = " ... " })');
        done2();
    });
	sucker.use('CMD-require', function (exp) {
        assert.ok(exp === 'dataAdataB', 'cmd/require.js  = > define(function(require, exports, module){ return require("data/a") + require("data/b") })');
        done3();
    });
	sucker.use('CMD-module-exports', function (exp) {
        assert.ok(exp === 'dataA', 'cmd/module.exports.js  = > define(function(require, exports, module){ module.exports = "dataA" })');
        done4();
    });
	
});

QUnit.module('DATA');
QUnit.test( "DATA 数据模块", function(assert) {
    assert.expect(4);
    var done1 = assert.async();
    var done2 = assert.async();
	var done3 = assert.async();
    var done4 = assert.async();

    sucker.use('DATA-object', function (exp) {
        assert.ok(exp.obj === 'simple-object', 'simple/object.js = > define({"obj":"'+exp.obj+'"}) // 定义object 对象');
        done1();
    });
	sucker.use('DATA-array', function (exp) {
        assert.ok(exp[0] === 'simple-array', 'simple/array.js  = > define(["'+exp[0]+'"]) // 定义数组');
        done2();
    });
	sucker.use('DATA-number', function (exp) {
        assert.ok(exp === 123, 'simple/number.js  = > define('+exp+') // 定义数字');
        done3();
    });
	sucker.use('DATA-string', function (exp) {
        assert.ok(exp === 'simple-string', 'simple/string.js  = > define("'+exp+'") // 定义字符串');
        done4();
    });
});
