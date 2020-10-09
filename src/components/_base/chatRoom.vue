<template>
  <div>
    <div v-if="isPt === false">
      <div class="chatRoom">
        <div class="list">
          <h5>Chat</h5>
          <hr />
          <div v-if="msgCount > 0">
            <div
              class="sender"
              v-for="(item, index) in getListChatWorker"
              :key="index"
            >
              <img
                @click="onMsg(item)"
                v-bind:src="`${urlApi}${item.company_image}`"
                alt="#"
              />
              <div class="isi">
                <h6>{{ item.company_name }}</h6>
                <p>You've got messagge</p>
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
            <img
              v-bind:src="`${urlApi}${getRoomChatData[0].company_image}`"
              alt="#"
            />
            <h4>{{ getRoomChatData[0].company_name }}</h4>
          </div>
          <div v-if="msgClick === true" class="chat">
            <div
              class="msgRow"
              v-for="(item, index) in getRoomChatData"
              :key="index"
            >
              <div
                class="msg"
                :style="[
                  item.sender !== userData.user_id
                    ? { justifyContent: 'flex-Start' }
                    : { justifyContent: 'flex-End' }
                ]"
              >
                <p
                  :style="[
                    item.sender !== userData.user_id
                      ? { textAlign: 'right', borderColor: 'red' }
                      : { textAlign: 'left', borderColor: 'blue' }
                  ]"
                >
                  {{ item.message }}
                </p>
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
            <div
              class="sender"
              v-for="(item, index) in getListChatCompany"
              :key="index"
            >
              <img
                @click="onMsg(item)"
                v-bind:src="`${urlApi}${item.user_image}`"
                alt="#"
              />
              <div class="isi">
                <h6>{{ item.user_name }}</h6>
                <p>You've got message...</p>
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
            <img
              v-bind:src="`${urlApi}${getRoomChatData[0].user_image}`"
              alt="#"
            />
            <h4>{{ getRoomChatData[0].user_name }}</h4>
          </div>
          <div v-if="msgClick === true" class="chat">
            <div
              class="msgRow"
              v-for="(item, index) in getRoomChatData"
              :key="index"
            >
              <div
                class="msg"
                :style="[
                  item.sender !== userData.company_id
                    ? { justifyContent: 'flex-Start' }
                    : { justifyContent: 'flex-End' }
                ]"
              >
                <p
                  :style="[
                    item.sender !== userData.company_id
                      ? { textAlign: 'right', borderColor: 'red' }
                      : { textAlign: 'left', borderColor: 'blue' }
                  ]"
                >
                  {{ item.message }}
                </p>
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
    },
    getDataUsers() {
      this.userLoginData()
        .then(response => {})
        .catch(error => {
          console.log(error.data.msg)
        })
    },
    getWorkerData() {
      this.selectedWorkerProfile(this.getSelectedWorker)
        .then(response => {})
        .catch(error => {
          console.log(error.data.msg)
        })
    },
    onSend() {
      const data1 = {
        roomchat_id: this.getRoomId.roomchat_id,
        sender: this.form1.user_id,
        receive: this.getRoomChatData[0].company_id,
        message: this.message,
        role_id: this.getRoomChatData[0].roleid_user
      }

      const data2 = {
        roomchat_id: this.getRoomId.roomchat_id,
        sender: this.form2.company_id,
        receive: this.getRoomChatData[0].user_id,
        message: this.message,
        role_id: this.getRoomChatData[0].roleid_company
      }

      if (this.isPt === false) {
        this.sendMessage(data1)
          .then(response => {
            this.message = ''
          })
          .catch(error => {
            console.log(error.data.msg)
          })
      } else {
        this.sendMessage(data2)
          .then(response => {
            this.message = ''
          })
          .catch(error => {
            console.log(error.data.msg)
          })
      }
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

<style scoped src="../../assets/css/chat.css"></style>
