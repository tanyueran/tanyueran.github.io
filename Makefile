version = v0.0.1-4

run:
	yarn run serve

build:
	yarn run build

git-tag:
	git tag $(version) && git push origin $(version)
