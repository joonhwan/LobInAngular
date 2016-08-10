// jquery 객체를 전역변수 'jQuery' 및 '$' 에 놓는다 --> jqwidget이 window.jQuery 로접근한다.
// window['jQuery'] = $; <-- 이렇게 하는것과 똑같음.
import 'expose?$!expose?jQuery!jquery';

// jqxangular 모듈을 불러오기전에 angularjs 모듈이 들어있어야 함.
import 'angular';

// 
// jqwidget 모듈 로딩
//
import 'jqwidgets-framework/jqwidgets/styles/jqx.base.css';
//  import 'jqwidgets-framework/jqwidgets/jqx-all'; --> 이렇게 하면 전체 모듈들이 한번에 로딩된다. 나누어서 하는 방법 검토.
// 나누어서 하는 방식.
import 'jqwidgets-framework/jqwidgets/jqxcore';
window['jqxBaseFramework'] = $; // jqxwidgets 은 jquery 객체를 jqxBaseFramework 전역변수에 기록하려고 한다. 이걸 흉내냄 -_-
import 'jqwidgets-framework/jqwidgets/jqxangular';
import 'jqwidgets-framework/jqwidgets/jqxbuttons';
// import 'jqwidgets-framework/jqwidgets/jqxgrid.selection';
import 'jqwidgets-framework/jqwidgets/jqxscrollbar';
import 'jqwidgets-framework/jqwidgets/jqxdata';

// 아래꺼 순서가 중요. 예를 들어 jqxgrid.aggregates 와 같이 모듈은 jquery객체의 _jqxGrid 속성을 참조하는데,
// 이 속성은 jqxgrid 모듈이 로딩될 때 추가되는 속성.따라서, jqxgrid 모듈을 가장 먼저 loading한다.
import 'jqwidgets-framework/jqwidgets/jqxgrid';
import 'jqwidgets-framework/jqwidgets/jqxgrid.aggregates';
import 'jqwidgets-framework/jqwidgets/jqxgrid.columnsreorder';
import 'jqwidgets-framework/jqwidgets/jqxgrid.columnsresize';
import 'jqwidgets-framework/jqwidgets/jqxgrid.edit';
import 'jqwidgets-framework/jqwidgets/jqxgrid.export';
import 'jqwidgets-framework/jqwidgets/jqxgrid.storage';
import 'jqwidgets-framework/jqwidgets/jqxgrid.filter';
import 'jqwidgets-framework/jqwidgets/jqxgrid.selection';
import 'jqwidgets-framework/jqwidgets/jqxgrid.pager';
import 'jqwidgets-framework/jqwidgets/jqxgrid.grouping';
import 'jqwidgets-framework/jqwidgets/jqxgrid.sort';
import 'jqwidgets-framework/jqwidgets/jqxcombobox';
import 'jqwidgets-framework/jqwidgets/jqxlistbox';
import 'jqwidgets-framework/jqwidgets/jqxribbon';
import 'jqwidgets-framework/jqwidgets/jqxlayout';


console.log('vendor module initialized.');
