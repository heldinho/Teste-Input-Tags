<template>
  <div class="m-4">
    <h1 class="mb-4">{{ title }}</h1>
    <div>
      <input-tag
        v-model="tags"
        :before-adding="tag => withTags(tag)"
        ref="tag"
      ></input-tag>
      {{ tags }} - {{ allTags }}
    </div>
    <div class="card">
      <div class="card-header">Helder Passos</div>
      <div class="card-body">
        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label class="label-title" for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" />
            </div>
            <div class="form-group col-md-6">
              <label class="label-title" for="inputPassword4">Password</label>
              <input type="password" class="form-control" id="inputPassword4" />
            </div>
          </div>
          <div class="form-group">
            <label class="label-title" for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label class="label-title" for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label class="label-title" for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label class="label-title" for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label class="label-title" for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import InputTag from 'vue-input-tag'

const $$ = document.querySelectorAll.bind(document)

export default {
  name: 'Teste',
  props: ['title'],
  components: {
    InputTag
  },
  data() {
    return {
      allTags: ['ADMIN', 'TESTE', 'ABC'],
      tags: []
    }
  },
  methods: {
    withTags(tag) {
      if (tag == '') return false
      if (this.allTags.includes(tag.toUpperCase())) {
        // if (this.tags.includes(tag.toUpperCase())) return false
        this.tags.push(tag.toUpperCase())
        this.$refs.tag.newTag = ''
        var arrTags = $$('.input-tag')
        arrTags[0].style.backgroundColor = 'red'
        arrTags[0].style.color = 'black'
        console.log('textContent', arrTags[0].children[0].textContent)
        console.log('innerHTML', arrTags[0].children[0].innerHTML)
        console.log('innerText', arrTags[0].children[0].innerText)
        console.log('outerText', arrTags[0].children[0].outerText)
      } else {
        this.tags.push(tag.toUpperCase())
        this.allTags.push(tag.toUpperCase())
        console.log(this.$refs.tag.value.join(','))
        this.$refs.tag.newTag = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  color: #14a800;
  background-color: #555;
  padding: 10px 5px;
  transition: all 200ms linear;
  cursor: default;
  &:hover {
    color: #fff;
    background-color: #333;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  }
}
.label-title {
  float: left;
}

// https://github.com/matiastucci/vue-input-tag
.vue-input-tag-wrapper .input-tag {
  background-color: var(--blue) !important;
  border: 1px solid var(--blue) !important;
  border-radius: 2px;
  color: var(--dark) !important;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 4px;
  margin-right: 4px;
  padding: 3px;
}
</style>
