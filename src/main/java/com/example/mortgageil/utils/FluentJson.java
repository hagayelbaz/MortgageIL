package com.example.mortgageil.utils;

import com.example.mortgageil.Core.contracts.FluentData;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;
import java.util.function.Consumer;

public class FluentJson implements FluentData<JsonNode> {
    private JsonNode currentNode;
    private ObjectMapper mapper;

    public FluentJson() {
        mapper = new ObjectMapper();
    }

    public FluentJson(JsonNode jsonNode) {
        mapper = new ObjectMapper();
        this.currentNode = jsonNode;
    }

    public FluentJson(String json) {
        mapper = new ObjectMapper();
        try {
            this.currentNode = mapper.readTree(json);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }


    public FluentJson createArray() {
        this.currentNode = mapper.createArrayNode();
        return this;
    }

    public FluentJson addObjectToCurrentArray(Consumer<ObjectNode> modifier) {
        if (currentNode instanceof ArrayNode) {
            ObjectNode newObject = mapper.createObjectNode();
            modifier.accept(newObject);
            ((ArrayNode) currentNode).add(newObject);
        } else {
            throw new IllegalStateException("Current node is not an ArrayNode.");
        }
        return this;
    }

    public FluentJson modifyElementAtIndex(int index, Consumer<ObjectNode> modifier) {
        if (currentNode.isArray() && index >= 0 && index < currentNode.size()) {
            JsonNode node = currentNode.get(index);
            if (node instanceof ObjectNode) {
                modifier.accept((ObjectNode) node);
            }
        }
        return this;
    }

    public FluentJson in(String key) {
        if (this.currentNode != null && !this.currentNode.isMissingNode()) {
            return new FluentJson(this.currentNode.path(key));
        }
        return this;
    }

    public FluentJson add(String key, String value) {
        if (this.currentNode != null && this.currentNode.isObject()) {
            ((ObjectNode) this.currentNode).put(key, value);
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

    public FluentJson addArray(String key) {
        if (this.currentNode.isObject()) {
            this.currentNode = ((ObjectNode) this.currentNode).putArray(key);
        }
        return this;
    }


    public FluentJson createArrayFromList(List<?> objects, String... fields) {
        ArrayNode arrayNode = mapper.createArrayNode();
        for (Object obj : objects) {
            ObjectNode objectNode = mapper.createObjectNode();
            Map<String, Object> props = mapper.convertValue(obj, Map.class);
            for (String field : fields) {
                objectNode.put(field, String.valueOf(props.get(field)));
            }
            arrayNode.add(objectNode);
        }
        this.currentNode = arrayNode;
        return this;
    }

    public FluentJson forEach(BiConsumer<Integer, FluentJson> action) {
        if (this.currentNode.isArray()) {
            ArrayNode arrayNode = (ArrayNode) this.currentNode;
            int index = 0;
            for (JsonNode element : arrayNode) {
                FluentJson fj = new FluentJson(element);
                action.accept(index++, fj);
            }
        }
        return this;
    }

    public JsonNode get() {
        return this.currentNode;
    }

    public FluentJson find(String key, String value) {
        JsonNode foundNode = findNode(this.currentNode, key, value);
        return new FluentJson(foundNode);
    }

    private JsonNode findNode(JsonNode currentNode, String key, String value) {
        if (currentNode.isObject()) {
            ObjectNode objectNode = (ObjectNode) currentNode;
            JsonNode keyValue = objectNode.get(key);
            if (keyValue != null && keyValue.asText().equals(value)) {
                return currentNode;
            }
        }

        if (currentNode.isContainerNode()) {
            for (JsonNode child : currentNode) {
                JsonNode result = findNode(child, key, value);
                if (result != null) {
                    return result;
                }
            }
        }

        return null;
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