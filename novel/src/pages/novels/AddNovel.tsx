import { useNavigate } from "react-router-dom";
import NovelForm from "../../components/novels/NovelForm";
import BookForm from "../../components/novels/NovelForm";
import BasicLayout from "../../layouts/BasicLayout";
import { initialNovel, type Novel } from "../../types/book";
import { postNovel } from "../../apis/novelApis";
import useLogin from "../../hooks/useLogin";

const AddNovel = () => {
  const navigate = useNavigate();
  const { isLogin } = useLogin();

  const handleCancel = (id: number) => {
    navigate(`../${id}`);
  };
  const handleSubmit = async (formData: Novel) => {
    try {
      const id = await postNovel(formData);
      console.log("생성 ", id);
      navigate(`../${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!isLogin) navigate("/member/login");
  return (
    <BasicLayout>
      <h1 className="text-[32px]">Add New Book</h1>
      <NovelForm novel={initialNovel} onSubmit={handleSubmit} onCancel={handleCancel} />
    </BasicLayout>
  );
};

export default AddNovel;
