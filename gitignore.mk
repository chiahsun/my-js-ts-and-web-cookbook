
DOWNLOADS=Node.gitignore

.PHONY: gitignore-update gitignore-clean

gitignore-update: .gitignore

Mine.gitignore:
	touch $@

.gitignore: Mine.gitignore $(DOWNLOADS)
	cat Mine.gitignore > .gitignore
	$(foreach g, $(DOWNLOADS), echo "\n\n# From $(g)" >> .gitignore; echo "$(g)" >> .gitignore; cat $(g) >> .gitignore;)

%.gitignore:
	curl -LO https://github.com/github/gitignore/raw/main/$@

gitignore-clean:
	rm -f $(DOWNLOADS)