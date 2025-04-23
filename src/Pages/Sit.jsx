import { Table } from 'antd';

const dataSource = [
  { key: 1, name: 'Alice', age: 24, email: 'alice@example.com' },
  { key: 2, name: 'Bob', age: 31, email: 'bob@example.com' },
  { key: 3, name: 'Charlie', age: 28, email: 'charlie@example.com' },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];

const Sit = () => {
  return (
    <>
      <h1>Sit</h1>

      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};

export default Sit;
