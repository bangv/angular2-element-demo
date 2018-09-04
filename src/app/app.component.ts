import {Component, ViewEncapsulation} from '@angular/core';

import {ElModule} from 'element-angular'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  encapsulation: ViewEncapsulation.None   //防止element组件样式无效
})
export class AppComponent {
  test() {
    alert(3)
  }

  title = 'app';
  data: any = [{
    label: '一级 1',
    children: [{
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1',
      }]
    }, {
      label: '二级 1-1',
      children: [{
        label: '三级 1-1-1',
      }]
    }]
  }, {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
    }]
  }, {
    label: '一级 3',
  }]
  page: any=1 ;
  getPage(data){
    this.page = data
    console.log(data)
  }
}
