package com.example.mortgageil.utils;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.xml.XmlMapper;
import lombok.experimental.ExtensionMethod;

public class DataFormatConverter {

    public static String jsonToXml(String json) throws Exception {
        ObjectMapper jsonMapper = new ObjectMapper();
        JsonNode node = jsonMapper.readTree(json);
        XmlMapper xmlMapper = new XmlMapper();
        return xmlMapper.writeValueAsString(node);
    }

    public static String xmlToJson(String xml) throws Exception {
        XmlMapper xmlMapper = new XmlMapper();
        JsonNode node = xmlMapper.readTree(xml.getBytes());
        ObjectMapper jsonMapper = new ObjectMapper();
        return jsonMapper.writeValueAsString(node);
    }

}