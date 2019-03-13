<template>
  <div class="blue lighten-3 pa-3">
    <h1>User 컴포넌트</h1>
    <p>이름: {{name}}</p>
    <p>{{getDateAndTime(createdAt)}}</p>
    <p>{{helloToMixin}}</p>
    <v-btn color="success" @click="changeName()">이름 변경</v-btn>
    <hr>
    <v-layout row wrap>
      <v-flex xs12 sm6>
        <UserDetail
                :name="name"
                :address="address"
                :phone="phone"
                :hasDog="hasDog"
        />
      </v-flex>
      <v-flex xs12 sm6>
        <UserEdit
                :name="name"
                :address="address"
                :phone="phone"
                :hasDog="hasDog"
                @child="parents"
        />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue"
import UserEdit from "./UserEdit.vue"
import {dateFormat} from "../mixins/dateFormat"

export default {
  components: {
    UserDetail,
    UserEdit
  },
  data() {
    return {
      name: 'chanpong vuejs',
      address: '테스트동',
      phone: '010-1234-1234',
      hasDog: true,
      createdAt: null
    }
  },
  computed: {
    helloToMixin() {
      return this.mixinData + ' hi!';
    }
  },
  created() {
    console.log("User.vue console test")
    this.createdAt = new Date();
  },
  methods: {
    changeName() {
      this.name = "ChanPong"
    },
    parents(user) {
      this.name = user.name;
      this.address = user.address;
      this.phone = user.phone;
      this.hasDog = user.hasDog;
      console.log('parent!!');
    },
    getDateAndTime(date) {
      if(date != null) {
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let fullDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        return `${hour} ${minutes}`
      } else {
        return null;
      }
    }
  },
  mixins: [dateFormat]
}
</script>