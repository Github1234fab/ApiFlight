<template>
  <div class="container_all">
    <div class="game_choice">
      <div class="container_titles_games">
        <h2 class="game_choice_title">Choose your game</h2>
        <h4 class="gameA">Chercher le nom du pays</h4>
        <h4 class="gameB">Chercher le nom de la capitale</h4>
        <h4 class="gameC">Chercher la langue parlée</h4>
        <h4 class="gameD">Chercher le nom des habitants</h4>
      </div>
    </div>
    <div class="container_flags">
      <div v-for="(infos, index) in flags" :key="index">
        <div class="country_name">{{ infos.translations.fra.common }}</div>
        <div v-if="infos.flags.png">
          <img class="flags" :src="infos.flags.png" alt="Image des drapeaux" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      flags: []
    }
  },
  mounted() {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        this.flags = response.data
        console.log(this.flags)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
<style>
.container_flags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
  z-index: -4;
  position: relative;
  opacity: 0.6;

}
.flags {
  height: 50px;
  width: 67px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px -3px rgb(74, 72, 72);
  opacity: 0.8;
}
.flags:hover {
  opacity: 1;
}
.country_name {
  font-family: poppins;
  font-size: 12px;
  margin-bottom: 20px;
    text-overflow: ellipsis ;
  width: 120px;
}
button {
  height: 100px;
  width: 100px;
}
.game_choice {
  height: 400px;
  width: 500px;
  background-color: red;
  opacity: 0.8;
  z-index: 3333;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  /* //pour centrer un élément en position absolute */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.container_titles_games {
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
}

</style>
