.PHONY: help install dev build preview deploy clean

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

install: ## Install dependencies
	npm install

dev: ## Start development server
	npm run dev

build: ## Build for production
	npm run build

preview: build ## Preview production build locally
	npm run preview

deploy: ## Build and deploy to GitHub Pages
	npm run deploy

clean: ## Remove build artifacts and node_modules
	rm -rf dist node_modules

