import { useObserver } from "mobx-react-lite";
import { useStore } from "./index";

function useTestData() {
  const store = useStore();
  const { count } = store;

  return useObserver(() => ({
    test: Math.pow(count, 2),
  }));
}

export default useTestData;
