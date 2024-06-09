<script setup>
import { RouterLink,RouterView } from 'vue-router';
import { ref } from 'vue';


</script>

<template>
    <header>
        <h1>Router사용하기</h1>
   
        <div class="wrapper">
    
        <h2>NestedRouter</h2>
        <!-- <nav>
            <RouterLink to="/" replace active-class="active"></RouterLink>
            <RouterLink to="/nested">중첩 인덱스</RouterLink>
            <RouterLink to="/nested/view">중첩 라우터</RouterLink>
            
        </nav> -->

        <div>
        <h3>결제하기</h3>
        <button @click="()=>router.push('/popup1')">신용카드</button>
        <br>
        <button @clikc="()=>router.push('/popup2')">모바일페이</button>

    </div>

        </div>
    </header>
   
    <main>
        <RouterView />
    </main>

</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-size: 30px;
}

a {
  margin-left: 10px;
}

.active {
  color: red;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

header {
  text-align: center;
}

</style>
