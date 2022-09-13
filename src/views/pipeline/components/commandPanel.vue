<template>
  <div class="trigger-popup">
    <div class="menus">
      <div class="input-wrapper">
        <el-input v-model="filter" placeholder="快速筛选">
          <template #suffix>
            <el-icon>
              <IconifyIconOffline icon="search" />
            </el-icon>
          </template>
        </el-input>
      </div>
      <div class="list">
        <div class="item">
          <command style="margin-right: 10px" />
          <div class="text">命令</div>
          <caret-right />
          <div class="sub-item">
            <div class="text">命令1</div>
            <div class="text">命令2</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import command from "/@/assets/svg/command.svg?component";
import caretRight from "/@/assets/svg/caret_right.svg?component";

defineProps({});

const filter = ref();
</script>

<style lang="scss" scoped>
.trigger-popup {
  position: absolute;
  z-index: 1000;

  .menus {
    border: 1px solid #dadfe6;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 4px #d9d9d9;
    margin-bottom: 200px;
    width: 191px;

    .input-wrapper {
      padding: 6px 10px;
      background-color: #f5f7fa;
      border-radius: 4px 4px 0 0;
    }

    .list {
      background: #fff;
      box-shadow: 0 3px 12px 0 rgb(0 0 0 / 12%), 0 0 1px 0 rgb(0 0 0 / 8%);
      border-radius: 3px;
      padding: 4px 0;

      .item {
        display: flex;
        width: 100%;
        height: 36px;
        padding: 0 12px;
        align-items: center;
        line-height: 36px;
        font-size: 14px;
        color: #202d40;
        cursor: pointer;
        position: relative;

        .text {
          flex-grow: 1;
          white-space: nowrap;
          word-break: break-all;
          text-overflow: ellipsis;
        }

        .sub-item {
          position: relative;
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
