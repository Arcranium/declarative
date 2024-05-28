#!make

make:
	mkdir -p "./build"
	yarn build:lib && yarn pack --filename "./build/declarative-pack.tgz"