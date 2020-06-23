<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-input v-model="this.userInfo.userId" placeholder="请输入学生ID"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input v-model="this.userInfo.userId" placeholder="请输入邮箱或手机号"></el-input>
      </el-col>
      <el-col :span="6">
        <el-select v-model="this.userInfo.class" placeholder="请选择班级">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
    </el-row>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>

      <el-table-column label="ID" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.ID }}</span>
        </template>
      </el-table-column>

      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>

      <el-table-column label="班级" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.class }}</span>
        </template>
      </el-table-column>

      <el-table-column label="邮箱" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      <el-table-column label="电话" width="180">
        <template slot-scope="scope">
          <span>{{ scope.row.email }}</span>
        </template>
      </el-table-column>

      
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      userInfo: {
        userId: "",
        email: "",
        class: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          ID:"170801",
          name: "王大虎",
          class:"1班",
          email:"123123@163.com",
          phone:"13138382929",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          ID:"170802",
          name: "王大虎",
          class:"2班",
          email:"123123@163.com",
          phone:"13138382929",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          ID:"170803",
          name: "王大虎",
          class:"3班",
          email:"123123@163.com",
          phone:"13138382929",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          ID:"170804",
          name: "王大虎",
          class:"4班",
          email:"123123@163.com",
          phone:"13138382929",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      options: [{
          value: '选项1',
          label: '1班'
        }, {
          value: '选项2',
          label: '2班'
        }, {
          value: '选项3',
          label: '3班'
        }, {
          value: '选项4',
          label: '4班'
        }, {
          value: '选项5',
          label: '5班'
        }],
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less">
</style>