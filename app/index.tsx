import { Redirect } from "expo-router";

export default function Index() {
  // When app starts, go to /loading
  return <Redirect href="/loading" />;
}
