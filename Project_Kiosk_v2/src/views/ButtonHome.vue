<script setup>
    import {useRouter} from "vue-router";
    const router =useRouter();

</script>
<template>

    <div>
        <h3>결제하기</h3>
        <button @click="()=>router.push('/popup1')">신용카드</button>
        <button @clikc="()=>router.push('/popup2')">모바일페이</button>

    </div>

</template>