<template>
  <div id="app">
    <router-view />
    <div class="footer">
      <a href="https://validate.itwmw.com" target="_blank" class="document-link">查看完整文档</a>
    </div>
  </div>
</template>

<style>
.footer{
  position:fixed;
  bottom:0;
  width:100%;
  height:30px;
  background-color: #ffffff;
  border-top: 1px solid #e5e5e5;
}
.document-link{
  display: block;
  margin-top: 5px;
  font-size: 12px
}
a{
  text-decoration: none;
}
</style>
