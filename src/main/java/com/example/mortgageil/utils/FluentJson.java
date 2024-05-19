package com.example.mortgageil.utils;

import com.example.mortgageil.Core.Contracts.FluentData;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.w3c.dom.Node;

public class FluentJson implements FluentData<JsonNode> {
    private JsonNode currentNode;

    public FluentJson(String json) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            this.currentNode = mapper.readTree(json);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    public FluentJson in(String key) {
        if (this.currentNode != null && !this.currentNode.isMissingNode()) {
            this.currentNode = this.currentNode.path(key);
        }
        return this;
    }

    public JsonNode get() {
        return this.currentNode;
    }
}