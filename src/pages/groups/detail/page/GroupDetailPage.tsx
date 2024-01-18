import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import PageContainer from "../../../../components/common/PageContainer/PageContainer";
import Breadcrumbs from "../../../../components/common/Breadcrumbs/Breadcrumbs";
import routes from "../../../../config/routes";
import { useGroupDetailsQuery } from "../../../../store/services/groups.services";
import GroupDetails from "./details/GroupDetails";

function GroupDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: group, error } = useGroupDetailsQuery(
    { groupId: id! },
    { skip: !id },
  );

  useEffect(() => {
    if (!id) {
      navigate(routes.groups);
    }
  }, [id]);

  useEffect(() => {
    if (error) {
      navigate(routes.groups);
      toast.error("You do not have access to this group");
    }
  }, [error]);

  if (!group) {
    return null;
  }

  return (
    <PageContainer className="pt-4 pb-4 flex flex-col gap-4">
      <Breadcrumbs to="groups">Groups</Breadcrumbs>
      <GroupDetails group={group} />
    </PageContainer>
  );
}

export default GroupDetailPage;
