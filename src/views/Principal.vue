<template>
  <v-main class="grey lighten-2 ml-3 " onload="handlerTraerDatos()">

    <v-row>
      <v-col
          cols="12"
      >
      </v-col>
      <v-col
          cols="12"
          sm="6"
      >
        <v-sheet
            min-height="70vh"
            rounded="lg"
            class="ml-3 mr-3"
        >
          <v-container>
            <v-data-table
                :headers="headers"
                :items="usuariosObj"
                sort-by="calories"
                class="elevation-1"
            >
              <template v-slot:top>
                <v-toolbar
                    flat
                >
                  <v-toolbar-title>Usuarios</v-toolbar-title>
                  <v-divider
                      class="mx-4"
                      inset
                      vertical
                  ></v-divider>
                  <v-spacer></v-spacer>
                  <v-dialog
                      v-model="dialog"
                      max-width="500px"
                  >
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                      </v-card-title>

                      <v-card-text>
                        <v-container>
                          <v-row>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                              <v-text-field
                                  v-model="editedItem.name"
                                  label="Nombre"
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                              <v-text-field
                                  v-model="editedItem.username"
                                  label="NickName"
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                              <v-text-field
                                  v-model="editedItem.email"
                                  label="Correo"
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                              <v-text-field
                                  v-model="editedItem.phone"
                                  label="Telefono"
                              ></v-text-field>
                            </v-col>
                            <v-col
                                cols="12"
                                sm="6"
                                md="4"
                            >
                              <v-text-field
                                  v-model="editedItem.website"
                                  label="Web"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="close"
                        >
                          Cancel
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="save"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-dialog v-model="dialogDelete" max-width="550px">
                    <v-card>
                      <v-card-title class="headline justify-center">Esta Seguro que Desea Eliminar este Item?
                      </v-card-title>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-toolbar>
              </template>
              <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2 ml-3"
                    @click="editItem(item),mostrarInformacionUsuario = true"
                >
                  mdi-account-search
                </v-icon>
              </template>
            </v-data-table>
          </v-container>
        </v-sheet>
      </v-col>
      <v-col
          cols="12"
          sm="6"

      >
        <v-sheet
            rounded="lg"
            min-height="268"
            class="mr-3 ml-3 ">
          <v-card class="ml-3 mr-3">
            <v-card-title>Informacion De Usuario</v-card-title>
            <v-card
                v-show="mostrarInformacionUsuario"
                :disabled="false"
                class="align-content-center justify-center align-center ">
              <v-row justify="center">
                <v-avatar >
                  <img
                      src="https://cdn.vuetifyjs.com/images/john.jpg"
                      alt="John">
                </v-avatar>
              </v-row>
              <v-row justify="center" class="mt-4">
                {{editedItem.name}}
              </v-row>
              <v-row justify="center" class="mt-4">
                {{editedItem.id}}
              </v-row>
             <v-row class="ml-4 mt-3 mb-2">
               <v-icon class="mdi mdi-account-hard-hat mr-1"></v-icon> <span class="font-weight-regular">{{editedItem.username}}</span>
             </v-row>
              <v-row class="ml-4 mt-3 mb-2">
               <v-icon class="mdi mdi-email mr-1"></v-icon> <span class="font-weight-regular">{{editedItem.email}}</span>
             </v-row>
              <v-row class="ml-4 mt-3 mb-2">
               <v-icon class="mdi mdi-web mr-1"></v-icon> <span class="font-weight-regular">{{editedItem.website}}</span>
             </v-row>
              <v-row class="ml-4 mt-3 mb-2">
                <v-icon class="mdi mdi-home-city mr-1"></v-icon>
                <span class="font-weight-regular">{{editedItem.street}}, {{editedItem.suite}},{{editedItem.city}}</span>
              </v-row>
              <v-row class="ml-4 mt-3 mb-2">
                <v-icon class="mdi mdi-cellphone-android mr-1"></v-icon> <span class="font-weight-regular">{{editedItem.phone}}</span>
              </v-row>
              <v-row class="ml-4 mt-3 mb-2">
                <v-icon class="mdi mdi-city mr-1"></v-icon> <span class="font-weight-regular">{{editedItem.zipcode}}</span>
              </v-row>
              <v-row class="ml-4 mt-3 mb-2">
                <v-icon class="mdi mdi-google-maps mr-1"></v-icon> <span class="font-weight-regular">{{editedItem.lat}} - {{editedItem.lng}}</span>
              </v-row>
              <v-card class="mt-3 ml-3 mr-3">
                <GoogleMaps v-if="editedItem.lat != null && editedItem.lng != null" :latitude= editedItem.lat :longitude= editedItem.lng :title="'Titulo Marcador'"></GoogleMaps>
              </v-card>
            </v-card>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    <div>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </v-main>
</template>
<script>
import jsonEntity from "@/model/JSONPlaceholder.entity";
import GoogleMaps from "@/components/GoogleMaps";
export default {
  name: "Principal",
  components: {GoogleMaps},
  data() {
    return {
      usuarios: [],
      usuariosObj: [],
      dialog: false,
      mostrarInformacionUsuario: false,
      dialogDelete: false,
      headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
        },
        {text: 'Nombre', value: 'name'},
        {text: 'Nombre Usuario', value: 'email'},
        {text: 'Actions', value: 'actions', sortable: false},
      ],
      editedIndex: -1,
      editedItem: {},
      defaultItem: {}
    }
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Nuevo Usuario' : 'Edit Item'
    },
  },
  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.usuarios = []
    },
    handlerTraerDatos: function () {
      jsonEntity.getDatos().then((response) => {
        console.log('-response', response)
        this.usuarios = response
        response.map(item =>{
          let dato = {
            id : item.id,
            name : item.name,
            username : item.username,
            email : item.email,
            street : item.address.street,
            suite : item.address.suite,
            city : item.address.city,
            zipcode : item.address.zipcode,
            lat : Number.parseFloat(item.address.geo.lat),
            lng : Number.parseFloat(item.address.geo.lng),
            phone : item.phone,
            website : item.website
          }
          this.usuariosObj.push(dato)
        })
        console.log('porfis',this.usuariosObj)
      })
    },
    editItem(item) {
      this.editedIndex = this.usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = false
    },

    deleteItem(item) {
      this.editedIndex = this.usuarios.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.usuarios.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.usuarios[this.editedIndex], this.editedItem)
      } else {
        this.usuarios.push(this.editedItem)
      }
      this.close()
    },
  },
  mounted() {
    this.handlerTraerDatos()
  }
}
</script>

<style scoped>

</style>
