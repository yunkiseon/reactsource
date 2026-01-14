import CardLayout from './CardLayout';

function ParentCardLayout() {
  return (
    <>
      <CardLayout>
        <p>Props of Components</p>
      </CardLayout>
      <CardLayout title={'Details'}>
        <p>Featrure A</p>
        <p>Featrure B</p>
        <p>Featrure C</p>
      </CardLayout>
      <CardLayout title={'Contact'}>
        <p>Email : example@example.com</p>
        <p>phone : 123-456-7890</p>
      </CardLayout>
    </>
  );
}

export default ParentCardLayout;
