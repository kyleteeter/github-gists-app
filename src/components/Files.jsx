import styled from "styled-components";
import { docImg } from "../assets/";
import { FileLink, Icon } from "../shared-components";

const CardBottom = styled.div`
  display: flex;
  margin: 0.25em;
`;

const bgColor = {
  JavaScript: "#F6695F",
  Ruby: "#305562",
  Text: "darkblue",
  Markdown: "green",
  JSON: "orange",
};

const Language = styled.div`
  color: white;
  text-decoration: none;
  font-size: 1em;
  margin-left: 1em;
  padding: 0.25em 0.5em;
  border: none;
  border-radius: 5px;
  font-size: 0.75em;
  @media (max-width: 1017px) {
    margin-left: 0.5em;
  }
`;

const H4 = styled.h4`
  font-weight: normal;
`;

export function Files({ files, gistid }) {
  return (
    <>
      <H4>Files</H4>
      {Object.values(files).map((file) => {
        return (
          <CardBottom>
            <Icon src={docImg} alt='Link Chain Icon' />
            <FileLink
              href={file.raw_url}
              key={`file${gistid}`}
              target='_blank'
              rel='noreferrer'
              style={{ marginLeft: 5 }}
            >
              {file.filename}
            </FileLink>
            <Language
              style={{
                backgroundColor: bgColor[file.language]
                  ? bgColor[file.language]
                  : "black",
              }}
            >
              {file.language || "No Language Detected"}
            </Language>
          </CardBottom>
        );
      })}
    </>
  );
}
