import { useNavigate, useParams } from "react-router-dom";
import NovelForm from "../../components/novels/NovelForm";
import BasicLayout from "../../layouts/BasicLayout";
import { useNovel } from "../../hooks/useNovel";
import Loading from "../../components/common/Loading";
import Error from "../../components/common/Error";
import NovelDetail from "../../components/novels/NovelDetail";
import type { Novel } from "../../types/book";
import { putNovel } from "../../apis/novelApis";

const EditNovel = () => {
  const navigate = useNavigate();
  // id 가져오기
  const { id } = useParams<{ id: string }>();

  // 서버로 novel 요청
  const { serverData, loading, error } = useNovel(id!);

  const handleCancel = (id: number) => {
    // 이전 페이지 이동
    navigate(`../${id}`);
  };

  const handleSubmit = async (formData: Novel) => {
    try {
      const result = await putNovel(formData);
      console.log("수정 후 ", result);
      navigate(`../${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <Loading />;
  if (error || !serverData) return <Error />;

  return (
    <BasicLayout>
      <h1 className="text-[32px]">Edit Book</h1>
      {loading ? (
        <Loading />
      ) : (
        <NovelForm novel={serverData} onCancel={handleCancel} onSubmit={handleSubmit} />
      )}
    </BasicLayout>
  );
};

export default EditNovel;
