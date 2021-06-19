import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";
import { RecoilRoot } from "recoil";
import ContentContainer from "./ContentContainer";

const ContentEditor = ({ Left, Right }) => {
  return (
    <RecoilRoot>
      <ReflexContainer orientation="vertical">
        <ReflexElement className="left-pane">
          <div className="pane-content">
            <Left></Left>
          </div>
        </ReflexElement>

        <ReflexSplitter />

        <ReflexElement className="right-pane">
          <div className="pane-content">
            <ContentContainer>{Right}</ContentContainer>
          </div>
        </ReflexElement>
      </ReflexContainer>
    </RecoilRoot>
  );
};

export default ContentEditor;
