QUnit.config.openAll = true

QUnit.module('selector');
QUnit.test( "选择器", function(assert) {
    var done1 = assert.async();
	var len1 = radar('#test').length;
    assert.ok(len1 >=1, 'radar("#test") => getByID');
    done1();
	
	var done2 = assert.async();
	var len2 = radar('.test').length;
    assert.ok(len2 >=1, 'radar(".test") => getByClassName');
    done2();
	
	var done3 = assert.async();
	var len3 = radar('div').length;
    assert.ok(len3 >=1, 'radar("div") => getByTagName');
    done3();
	
	var done4 = assert.async();
	var len4 = radar('#test .test').length;
    assert.ok(len4 >=1, 'radar("#test .test") => id>className');
    done4();
	
	var done5 = assert.async();
	var len5 = radar('.test .demo').length;
    assert.ok(len5 >=1, 'radar(".test .demo") =>  className > className');
    done5();
	
	var done6 = assert.async();
	var len6 = radar('#test').find('.test').length;
    assert.ok(len6 >=1, 'radar("#test").find(".test") =>  find');
    done6();
	
	var done7 = assert.async();
	var len7 = radar('.test').first().length;
    assert.ok(len7 >=1, 'radar(".test").first() =>  first()');
    done7();
	
	var done8 = assert.async();
	var len8 = radar('.test').last().length;
    assert.ok(len8 >=1, 'radar(".test").last() =>  last()');
    done8();
	
	var done9 = assert.async();
	var len9 = radar('.test').eq(1).length;
    assert.ok(len9 >=1, 'radar(".test").eq(1) =>  eq()');
    done9();
	
	
});

QUnit.module('even');
QUnit.test( "选择器", function(assert) {
    var done1 = assert.async();
	var len1 = radar('#test').length;
    assert.ok(len1 >=1, 'radar("#test") => getByID');
    done1();
	
	
	
});