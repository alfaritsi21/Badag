<template>
  <div>
    <div v-if="isPt === false">
      <div class="chatRoom">
        <div class="list">
          <h5>Chat</h5>
          <hr />
          <div v-if="msgCount > 0">
            <div class="sender" v-for="(item, index) in getListChatWorker" :key="index">
              <img @click="onMsg(item)" src="../../assets/img/propict.png" alt />
              <div class="isi">
                <h6>PT [...]</h6>
                <p>haloo..</p>
              </div>
            </div>
          </div>
          <div v-else class="noChat">
            <img src="../../assets/img/undraw.png" alt />
            <p>Belum ada chat</p>
          </div>
        </div>
        <div class="room">
          <div v-if="msgClick === true" class="profile">
            <img v-bind:src="`${urlApi}${getRoomChatData[0].company_image}`" alt="#" />
            <h4>{{getRoomChatData[0].company_name}}</h4>
          </div>
          <div v-if="msgClick === true" class="chat">
            <div class="msgRow" v-for="(item, index) in getRoomChatData" :key="index">
              <div
                class="msg"
                :style="[index %2 ? {justifyContent: 'flex-Start'} : {justifyContent: 'flex-End'}]"
              >
                <p
                  :style="[index %2 ? { textAlign: 'right'} : { textAlign: 'left'}]"
                >{{item.message}}</p>
              </div>
            </div>
          </div>
          <div v-else class="noChat2">
            <img src="../../assets/img/undraw.png" alt />
            <p>Pilih chat yang ingin dilihat</p>
          </div>
          <div class="type">
            <input
              :disabled="msgClick === false"
              type="text"
              placeholder="ketik pesan..."
              v-model="message"
            />
            <div v-if="msgClick === true" class="sendImg" @click="onSend">
              <img src="../../assets/img/send.png" alt />
            </div>
            <div v-else class="sendImg">
              <img src="../../assets/img/send.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="window" @click="onWindow"></div>
    </div>
    <div v-if="isPt === true">
      <div class="chatRoom">
        <div class="list">
          <h5>Chat</h5>
          <hr />
          <div v-if="msgCount > 0">
            <div class="sender" v-for="(item, index) in 5" :key="index">
              <img @click="onMsg" src="../../assets/img/propict.png" alt />
              <div class="isi">
                <h6>Jonas adam ada madfaw adsa</h6>
                <p>Permisi kak, mau tanya...</p>
              </div>
            </div>
          </div>
          <div v-else class="noChat">
            <img src="../../assets/img/undraw.png" alt />
            <p>Belum ada chat</p>
          </div>
        </div>
        <div class="room">
          <div v-if="msgClick === true" class="profile">
            <img src="../../assets/img/propict.png" alt="#" />
            <h4>Jonas adam</h4>
          </div>
          <div v-if="msgClick === true" class="chat">
            <div class="msgRow" v-for="(item, index) in 11" :key="index">
              <div
                class="msg"
                :style="[index %2 ? {justifyContent: 'flex-Start'} : {justifyContent: 'flex-End'}]"
              >
                <p
                  :style="[index %2 ? { textAlign: 'right'} : { textAlign: 'left'}]"
                >Permisi kak, mau tanya kalo gini kalo gini kalo gini jadi kalo gitu bagaimana kak?</p>
              </div>
            </div>
          </div>
          <div v-else class="noChat2">
            <img src="../../assets/img/undraw.png" alt />
            <p>Pilih chat yang ingin dilihat</p>
          </div>
          <div class="type">
            <input
              :disabled="msgClick === false"
              type="text"
              placeholder="ketik pesan..."
              v-model="message"
            />
            <div v-if="msgClick === true" class="sendImg" @click="onSend">
              <img src="../../assets/img/send.png" alt />
            </div>
            <div v-else class="sendImg">
              <img src="../../assets/img/send.png" alt />
            </div>
          </div>
        </div>
      </div>
      <div class="window" @click="onWindow"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Chatroom',
  data() {
    return {
      urlApi: process.env.VUE_APP_URL,
      message: '',
      msgCount: 1,
      msgClick: false,
      form1: {
        user_id: null
      },
      form2: {
        company_id: null
      }
    }
  },
  created() {
    this.getDataUsers()
    this.getWorkerData()
    this.getDataChat()
  },
  computed: {
    ...mapGetters([
      'isPt',
      'userData',
      'getFullUserData',
      'getSelectedWorker',
      'getWorkerProfile',
      'getListChatWorker',
      'getListChatCompany',
      'getRoomChatData',
      'getRoomId'
    ])
  },
  methods: {
    ...mapActions([
      'userLoginData',
      'selectedWorkerProfile',
      'chatWorker',
      'chatCompany',
      'chatRoom',
      'sendMessage'
    ]),
    ...mapMutations([]),
    getDataChat() {
      if (this.isPt === false) {
        this.form1.user_id = this.userData.user_id
        this.chatWorker(this.form1)
      } else {
        this.form2.company_id = this.userData.company_id
        this.chatCompany(this.form2)
      }
    },
    onMsg(item) {
      this.msgClick = true
      const form = {
        roomchat_id: item.id_roomchat
      }
      this.chatRoom(form)
      console.log(item)
    },
    getDataUsers() {
      this.userLoginData()
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error.data.msg)
        })
    },
    getWorkerData() {
      this.selectedWorkerProfile(this.getSelectedWorker)
        .then((response) => {
          // console.log(response)
        })
        .catch((error) => {
          console.log(error.data.msg)
        })
    },
    onSend() {
      const data = {
        roomchat_id: this.getRoomId.roomchat_id,
        sender: this.form1.user_id,
        receive: this.getRoomChatData[0].company_id,
        message: this.message,
        role_id: this.getRoomChatData[0].roleid_user
      }
      this.sendMessage(data)
        .then((response) => {})
        .catch((error) => {
          console.log(error.data.msg)
        })
    },
    onWindow() {
      this.msgClick = false
    }
  },
  updated() {
    const form = {
      roomchat_id: this.getRoomId.roomchat_id
    }
    this.chatRoom(form)
  }
}
</script>

<style scoped src="../../assets/css/chat.css">
</style>
