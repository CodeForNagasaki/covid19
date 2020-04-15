<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">
        {{ headerItem.title }}
      </page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }} </span>
        <time :datetime="updatedAt">{{ lastUpdate }}</time>
        <span :class="[$style.alert]"
          >※ データの更新は平日（県庁稼働日）のお昼頃になります。</span
        >
      </div>

      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }} </span>
      </div>
    </div>

    <whats-new class="mb-4" :items="newsItems" />
    <nagasaki-city-news class="mb-4" />
    <static-info
      class="mb-4"
      :url="localePath('/nagasaki/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <v-row class="DataBlock">
      <confirmed-cases-details-card />
      <confirmed-cases-number-card />
      <confirmed-cases-attributes-card />
      <tested-number-card />
    </v-row>
    <v-row>
      <health-center-card />
    </v-row>
    <v-divider />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import { bodik } from '../services'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import NagasakiCityNews from '@/brigade/nagasaki/components/NagasakiCityNews.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import Data from '@/data/data.json'
import News from '@/brigade/nagasaki/data/news.json'

import ConfirmedCasesDetailsCard from '@/brigade/nagasaki/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/brigade/nagasaki/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/brigade/nagasaki/components/cards/ConfirmedCasesAttributesCard.vue'
import TestedNumberCard from '@/brigade/nagasaki/components/cards/TestedNumberCard.vue'
import HealthCenterCard from '@/brigade/nagasaki/components/cards/HealthCenterCard.vue'

import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

const bodicUrl =
  'https://data.bodik.jp/api/action/datastore_search?resource_id='

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    NagasakiCityNews,
    StaticInfo,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    TestedNumberCard,
    HealthCenterCard
  },
  async fetch({ store, app: { $axios } }) {
    try {
      const res = await $axios.get(
        bodicUrl + '71e83845-2648-4cb3-a69d-9f5f5412feb2'
      )
      // console.log(res.data, 'url')
      store.commit('setBodicData1', res.data.result.records)

      const res2 = await $axios.get(
        bodicUrl + 'de7ce61e-1849-47a1-b758-bca3f809cdf8'
      )
      // console.log(res2, 'de7ce61e')
      store.commit('setBodicData2', res2.data.result.records)

      const newsRes = await $axios.get(bodicUrl + bodik.nagasakiCityNewsId)

      store.commit('setNagasakiCityNews', newsRes.data.result.records)
    } catch (error) {
      console.log(error, 'error')
    }
  },
  data() {
    const lastUpdate = this.$store.state.lastUpdate

    const data = {
      Data,
      lastUpdate,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('県内の最新感染動向')
      },
      newsItems: News.newsItems
    }
    return data
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.Data.lastUpdate)
    }
  },
  async mounted() {
    try {
      const result1 = await bodik.fetch1()
      this.$store.commit('setBodicData1', result1.records)

      const result2 = await bodik.fetch2()
      this.$store.commit('setBodicData2', result2.records)

      const news = await bodik.fetchNagasakiCityNews()
      this.$store.commit('setNagasakiCityNews', news.records)
    } catch (error) {
      console.log(error, 'error')
    }
  },
  methods: {},
  head(): MetaInfo {
    return {
      title: this.$t('県内の最新感染動向') as string
    }
  }
})
</script>

<style module lang="scss" scoped>
.MainPage {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
  .DataBlock {
    margin: 20px -8px;

    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }

      @include lessThan($small) {
        padding: 4px 8px;
      }
    }
  }
}

.alert {
  padding: 8px;
  color: #f00;
}
</style>
