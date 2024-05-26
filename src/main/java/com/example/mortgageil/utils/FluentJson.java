package com.example.mortgageil.utils;

import com.example.mortgageil.Core.contracts.FluentData;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

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

    public FluentJson at(int index) {
        if (this.currentNode != null && !this.currentNode.isMissingNode()) {
            this.currentNode = this.currentNode.get(index);
        }
        return this;
    }

    public FluentJson map(String oldKey, String newKey) {
        if (this.currentNode != null && this.currentNode.isObject()) {
            mapForObject(oldKey, newKey);
        } else if (this.currentNode != null && this.currentNode.isArray()) {
            mapForArray(oldKey, newKey);
        }
        return this;
    }

    public JsonNode get() {
        return this.currentNode;
    }


    private void mapForArray(String oldKey, String newKey) {
        for (JsonNode childNode : this.currentNode)
            if (childNode.isObject()) {
                ObjectNode objectNode = (ObjectNode) childNode;
                JsonNode value = objectNode.get(oldKey);
                if (value != null) {
                    objectNode.remove(oldKey);
                    objectNode.set(newKey, value);
                }
            }
    }

    private void mapForObject(String oldKey, String newKey) {
        ObjectNode objectNode = (ObjectNode) this.currentNode;
        JsonNode value = objectNode.get(oldKey);
        if (value != null) {
            objectNode.remove(oldKey);
            objectNode.set(newKey, value);
        }
    }
}