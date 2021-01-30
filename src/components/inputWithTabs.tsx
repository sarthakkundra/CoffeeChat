import { Flex, Input, Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

export interface InputWithTabsProps {
  name: string;
  placeholder: string;
  defaultValue: string[];
  setValue: any;
}

export default function InputWithTabs(props: InputWithTabsProps) {
  const [tabs, setTabs] = useState<string[]>(props.defaultValue);
  const [value, setValue] = useState("");

  useEffect(() => {
    setTabs(props.defaultValue);
  }, [props.defaultValue]);

  useEffect(() => {
    props.setValue("languages", tabs);
  }, [tabs]);

  const createTab = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log(e.key);
      setTabs((oldTabs) => {
        if (value.length > 0) {
          const tabValue = value.slice();
          setValue("");
          return [tabValue, ...oldTabs];
        } else {
          return oldTabs;
        }
      });
    }
  };

  return (
    <>
      <Input
        name={props.name}
        placeholder={props.placeholder}
        onKeyDown={createTab}
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Flex py={2} direction="column">
        {tabs.map((tab) => {
          return (
            <Flex py={1} key={tab}>
              <Tag size="sm" borderRadius="full">
                <TagLabel>{tab}</TagLabel>
                <TagCloseButton />
              </Tag>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
}
