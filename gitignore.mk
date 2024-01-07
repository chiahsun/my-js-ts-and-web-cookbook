
DOWNLOADS=Node.gitignore Vite.gitignore

.PHONY: gitignore-update gitignore-clean gitignore-download

gitignore-update: .gitignore

gitignore-download: $(DOWNLOADS)

Mine.gitignore:
	touch $@

.gitignore: Mine.gitignore $(DOWNLOADS)
	cat Mine.gitignore > .gitignore
	$(foreach g, $(DOWNLOADS), echo "\n\n# From $(g)" >> .gitignore; echo "$(g)" >> .gitignore; cat $(g) >> .gitignore;)

Vite.gitignore:
	curl -L -o Vite.gitignore https://github.com/vitejs/vite/raw/main/.gitignore

%.gitignore:
	curl -LO https://github.com/github/gitignore/raw/main/$@

gitignore-clean:
	rm -f $(DOWNLOADS)