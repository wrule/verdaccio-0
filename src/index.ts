#!/usr/bin/env node
import dayjs from 'dayjs';

export default
class MyClass {
  public hello() {
    console.log('你好世界', dayjs().format('YYYY-MM-DD HH:mm:ss'));
  }
}

const a = new MyClass();
a.hello();
