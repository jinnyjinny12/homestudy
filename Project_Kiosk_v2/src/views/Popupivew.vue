<script setup>
import {useRouter} from  'vue-router';
// popup 은 즉 HIDEENVIEW 

const router = useRouter();

</script>

<template>
    <h1> 이건 팝업입니다</h1>
    <h2> IC카드를 삽입하시오</h2>
    <button @click="()=>router.go(-1)">결제취소</button>
    <button @click="()=>router.go(1)">승인하기</button>


</template>