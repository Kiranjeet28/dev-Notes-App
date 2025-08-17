import { Redirect } from "expo-router";

export default function Index() {
  // First screen = loading
  return <Redirect href="/loading" />;
}
