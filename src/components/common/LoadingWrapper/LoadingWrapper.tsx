import Loader from "../Loader/Loader";

interface Props {
  children: React.ReactNode;
  isLoading: boolean;
  size?: number;
}

function LoadingWrapper({ children, size, isLoading }: Props) {
  if (isLoading) return <Loader size={size} />;

  return children;
}

LoadingWrapper.defaultProps = {
  size: 8,
};

export default LoadingWrapper;
