<template>
  <div class="header">
  <div class="logo"><i class="fa-solid fa-flag fa-xl"></i></div>
    <h1 class="title_header">FlagsGame</h1>
    <nav>
    <a href="/">Home</a> 
    <a href="/game">Game</a>
    </nav>
  </div>
</template>
<script></script>
<style>
.header {
  width: 100%;
  height: 90px;
  background-color: rgb(141, 141, 163);
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
.title_header {
  color: white;
  font-size: 22px;
}
nav{
width: 200px;
display: flex;
justify-content: space-between;
margin-right: 70px;
}
nav a{
  color: white;
  text-decoration: none;
}
.logo{
  color: white;
  margin-left: 70px;
  animation: logo 1s alternate;
  animation-iteration-count: 3;
}
@keyframes logo {
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(10deg);
  }
}
</style>