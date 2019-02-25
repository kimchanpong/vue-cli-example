<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{count}}</p>
        <button @click="count++">btn</button>
        <HomeComponent/>
        <StatusComponent/>
    </div>
</template>

<script>
import HomeComponent from './Home'
import Home from "./views/Home";

export default {
    name: 'App',
    components: {
      Home,
      HomeComponent
    },
    data () {
        return {
            title: '하이',
            count: 1
        }
    }
}
</script>
