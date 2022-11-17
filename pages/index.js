import Home from "../Components/HomePage";
import Layout from "../Components/layout/layout";

import { getRooms } from "../redux/action/roomAction";
import { wrapper } from "../redux/store";

export default function Index() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   async ({ req, store }) => {
//     await store.dispatch(getRooms(req))
//   }
// );

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(getRooms(req));
    }
);
