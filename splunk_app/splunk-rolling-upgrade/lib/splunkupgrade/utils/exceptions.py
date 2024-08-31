class SplunkHomeNotSetError(Exception):
    pass


class WrongManifestsError(Exception):
    pass


class ConfigurationError(Exception):
    pass


class InvalidDownloaderConfigError(ConfigurationError):
    pass


class ImportNotFoundException(Exception):
    pass


class RemoteDownloaderException(Exception):
    pass


class NoNextPeerForUpgradeException(Exception):
    pass


class ProxyNotFoundException(Exception):
    pass


class PackageExtractorException(Exception):
    pass


class UpgraderException(Exception):
    pass


class UndefinedEnvVariableException(Exception):
    pass


class NoUpgradeRecordFound(Exception):
    pass


class NoManifest(Exception):
    pass


class WrongManifestFormat(Exception):
    pass


class UnsupportedPackageExtension(Exception):
    pass


class WrongVersionFormat(Exception):
    pass
